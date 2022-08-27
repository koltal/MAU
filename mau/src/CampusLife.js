import guys from './guys.jpeg';
const CampusLife = () => {
    return (  
        <div className='Campus-Life-Container' styles={{ background:`linearGradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${guys})` }}>
             
            <div>
                <h4>Campus Life</h4>
            </div>
        </div>
    );
}
 
export default CampusLife;