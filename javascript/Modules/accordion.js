export default function initAccordion() {
    const accordionTitle = document.querySelectorAll('[data-accordion]');

    accordionTitle.forEach((element)=>{
        element.addEventListener('click', openAccordion);
        
    });
    
    
    function openAccordion(){
        this.classList.toggle('open-accordion');
    }
}


