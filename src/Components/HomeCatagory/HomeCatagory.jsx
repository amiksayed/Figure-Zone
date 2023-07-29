import "./HomeCatagory.css";
import got from "../../assets/images/Catagory_pics/pngwing.com.png";
import naruto from "../../assets/images/Catagory_pics/pngwing.com (2).png";
import star from "../../assets/images/Catagory_pics//pngwing.com (4).png";
const HomeCatagory = () => {
  return (
    <div className="catagory-img">
    {/* DC */}
      <div className="tooltip">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/1/1c/DC_Comics_logo.png"
          alt=""
        />
        <span className="tooltiptext">DC</span>
      </div>

    {/* Marvel */}
      <div className="tooltip">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
          alt=""
        />
        <span className="tooltiptext">MARVEL</span>
      </div>

    {/* Goku */}
      <div className="tooltip">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Kanji_Goku_%28Sabidur%C3%ADa%29.png"
          alt=""
        />
        <span className="tooltiptext">DBZ</span>
      </div>
    
    {/* GOT */}
      <div className="tooltip">
        <img
          src={got}
          alt=""
        />
        <span className="tooltiptext">GOT</span>
      </div>

    {/* Naruto */}
      <div className="tooltip">
        <img
          src={naruto}
          alt=""
        />
        <span className="tooltiptext">NARUTO</span>
      </div>

    {/* StarWar */}
      <div className="tooltip">
        <img
          src={star}
          alt=""
        />
        <span className="tooltiptext">STARWAR</span>
      </div>

    </div>
  );
};

export default HomeCatagory;
