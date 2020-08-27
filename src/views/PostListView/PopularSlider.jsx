import React, {useState, useEffect} from 'react';
import './scss/PopularSlider.scss'
import { PostAPI } from '../../api';


const PopularSlider = () => {
    const[popPosts, setPopPosts] = useState([]);

    const fetchPopPost = async ()=>{
        try{
            const result = await PostAPI.getPopularPosts(); 
            setPopPosts([...result]);
            console.log(result);
        } catch(e){
            console.log(e);
        }

    };

    useEffect(()=>{
        fetchPopPost();
        console.log(popPosts);
    },[]);

    if(!popPosts) {
        return null;
    }
    return (
        <>  
            <div className="popPost-slider-wrap">
                <p className="popPost-sliderHeader">
                    인기 동아리 포스팅
                </p>
                <div className="popPost-container">
                    
                    {popPosts.map(src=>(
                        <div
                        key={src}
                        className="popPost-card"
                        style={{
                        // backgroundImage: `url(${src.post_img_url})`
                        backgroundColor: "#904e87"
                        }}>
                            <p className="popPost-title">{src.post_title}</p>
                            <p className="popPost-club">{src.club}</p>
                    </div>
                    
                    ))}
                </div>
            </div>
            
        </>
    );
};

export default PopularSlider;