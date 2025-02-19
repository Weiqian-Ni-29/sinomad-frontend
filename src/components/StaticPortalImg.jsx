import './StaticPortalImg.css';

function StaticPortalImg(props) {
    return (
        <div id={props.id} className='static-portal'>
            <img src={props.img}/>
            <div className='static-text-overlay' style={{color:props.textColor}}>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default StaticPortalImg;