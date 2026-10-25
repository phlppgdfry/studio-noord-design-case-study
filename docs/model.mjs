export const workshops = [
  {id:'vorm',title:'Van vorm naar beweging',category:'Motion',host:'Noor Peeters',time:'10:00–12:30',price:3500,available:6,shape:0,description:'Laat simpele vormen tot leven komen. Onderzoek hoe ritme, timing en contrast een ontwerp karakter geven.'},
  {id:'letter',title:'Letters buiten de lijnen',category:'Typografie',host:'Ilse De Smet',time:'13:00–15:00',price:2500,available:0,shape:1,description:'Maak een eigen lettervorm met papier, observatie en een flinke dosis experiment.'},
  {id:'druk',title:'Druk je eigen richting',category:'Grafisch',host:'Lotte Jacobs',time:'16:00–18:00',price:3000,available:3,shape:2,description:'Van schets naar een eigen grafische afdruk. Werk met vorm, herhaling en onverwachte kleurcombinaties.'}
];
export const euro = cents => new Intl.NumberFormat('nl-BE',{style:'currency',currency:'EUR',maximumFractionDigits:2}).format(cents/100);
export function validateBooking({workshop,quantity,name,email,consent}) {
  const errors={};
  if(!workshop) return {workshop:'Kies een bestaande workshop.'};
  if(!Number.isInteger(quantity)||quantity<1||quantity>workshop.available) errors.quantity=workshop.available===0?'Deze workshop is volzet. Kies een andere workshop.':`Kies 1 tot ${workshop.available} plaatsen.`;
  if(typeof name!=='string'||name.trim().length<2||name.trim().length>80) errors.name='Vul een naam van 2 tot 80 tekens in.';
  if(typeof email!=='string'||email.length>254||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email='Vul een geldig e-mailadres in.';
  if(consent!==true) errors.consent='Bevestig dat dit een fictieve demoboeking is.';
  return errors;
}
export function createBooking(inventory,input,previous=null) {
  if(previous?.idempotencyKey===input.idempotencyKey) return {booking:previous,inventory};
  const workshop=inventory.find(item=>item.id===input.workshopId);
  const errors=validateBooking({...input,workshop});
  if(Object.keys(errors).length) return {errors,inventory};
  if(typeof input.idempotencyKey!=='string'||!input.idempotencyKey) return {errors:{request:'Start de boeking opnieuw.'},inventory};
  const booking={reference:`SN-DEMO-${input.idempotencyKey.slice(-6).toUpperCase()}`,idempotencyKey:input.idempotencyKey,workshopId:workshop.id,title:workshop.title,quantity:input.quantity,total:workshop.price*input.quantity,name:input.name.trim()};
  return {booking,inventory:inventory.map(item=>item.id===workshop.id?{...item,available:item.available-input.quantity}:{...item})};
}
export function filterWorkshops(items,{query='',category='Alles',favorites=null}={}) {
  const q=query.trim().toLocaleLowerCase('nl-BE');
  return items.filter(item=>(category==='Alles'||item.category===category)&&(!favorites||favorites.includes(item.id))&&`${item.title} ${item.host} ${item.category}`.toLocaleLowerCase('nl-BE').includes(q));
}
