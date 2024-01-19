import {useEffect, useState} from "react";

const About = function() { 
    const [list, setList] = useState([]);
    useEffect(() => {
        let mounted = true; 
        async function doStuff(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json(); 
            if (mounted) {
                let items = [];
                for (let i=0; i < data.length; i++) {
                    let newItem = {id: data[i].id, title: data[i].title}
                    items.push(newItem);
                }
                console.log(items)
                setList(items.map((item) => {
                    return <li key={item.id}>{item.title}</li>
                    
                }))
                
            }
        }
        doStuff();
        return () => {
            mounted=false;
        }
    }, []);

    return <>
        <div>
            <ul>{list}</ul>
        </div>
    </>
} 
export default About;