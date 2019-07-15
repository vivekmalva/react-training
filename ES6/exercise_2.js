// Write a simple destructuring expression 
// to find the value of title, 
// author firstname and publisher web url from
// the given object
// • Change the variable name title to doc, firstname to name, 
// and url to web
const meta = {
    title: 'Destructuring Assignment',
    authors: [ { firstname: 'Craig', lastname: 'Buckler' } ],
    publisher: {
    name: 'SitePoint',
    url: 'http://www.sitepoint.com/'
    }
    }; 
    
    const {title, authors:[{firstname}], publisher:{url} } = meta;
    console.log(title);
    console.log(firstname);
    console.log(url);
    

    const { title:doc} = meta;
    console.log(doc);
    const {firstname:name} = meta.authors[0];
    console.log(name);
    const {url:web} = meta.publisher;
    console.log(web);
    
    