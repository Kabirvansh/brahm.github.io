function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function saveContact() {
    // vCard data
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Brahm Josan
ORG:Brahm Josan
TEL;TYPE=CELL:+1-587-987-0803
NOTE:Prime Team Yeg
END:VCARD
    `;
    
    // Create a blob with vCard data
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'contact.vcf';  // Set the file name
    
    // Append the link to the body, trigger the click and remove the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}