import { useState } from "react";

const faq = [
  {
    q:"Is your land legally verified?",
    a:"Yes. All of our projects have 100% verified legal documents."
  },
  {
    q:"Do you provide installment facilities?",
    a:"Yes. Easy installment payment options are available."
  },
  {
    q:"Where are your projects located?",
    a:"Our projects are located in prime areas of Rajshahi."
  },
  {
    q:"Can I visit the project before booking?",
    a:"Absolutely. We encourage every customer to visit the project."
  }
];

export default function FAQ(){

const [open,setOpen]=useState(null);

return(

<section className="py-20 bg-white">

<div className="max-w-4xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center text-green-700 mb-12">
Frequently Asked Questions
</h2>

{faq.map((item,index)=>(

<div
key={index}
className="border rounded-2xl mb-5 overflow-hidden"
>

<button
onClick={()=>setOpen(open===index?null:index)}
className="w-full text-left p-6 font-bold text-lg"
>
{item.q}
</button>

{open===index&&(

<div className="p-6 bg-gray-50">
{item.a}
</div>

)}

</div>

))}

</div>

</section>

)

}