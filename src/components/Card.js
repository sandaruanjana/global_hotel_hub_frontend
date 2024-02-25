import { useNavigate } from "react-router-dom";
import CardsData from "./CardsData";
import "./CardStyles.css";
import { useEffect, useState } from "react";
import { getAllHotels, getFilteredHotels } from "../utils/APIUtils";
import { ACCESS_TOKEN, BASE_URL } from "../constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Card() {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);

  const [location, setLocation] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [rooms, setRooms] = useState("");

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const [isLoading, setIsLoading] = useState(true);


  const handleSearch = () => {
    // Pass the search criteria to the parent component (Card) for processing
    // onSearch({ location, adults, children, rooms });
    console.log("Searching for:", { location, adults, children, rooms });

    setIsLoading(true);


    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (accessToken) {

      let obj = {
        location: location,
        adults: adults,
        child: children,
        rooms: rooms,
        check_in: checkInDate,
        checkout: checkOutDate
      }

      getFilteredHotels(accessToken, obj)
      .then((response) => {
        setHotels(response.data);
        setIsLoading(false);

      })
      .catch((error) => {
        console.error("Error retrieving hotels:", error);
        setIsLoading(false);

      });
    }


  };

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
   
      getAllHotels(accessToken)
        .then((response) => {
          setHotels(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error retrieving hotels:", error);
        });
  
  }, []);

  const handleCardClick = (re) => {
    navigate("/view", { state: re });
  };

  return (
    <div className="card-container"> 

<div className="search-bar">
      <select
        name="location"
        className="form-control tm-select"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
       <option value="">Select a destination</option>
                <option value="Ampara">Ampara</option>
                <option value="Batticaloa">Batticaloa</option>
                <option value="Eravur Town">Eravur Town</option>
                <option value="Kalmunai">Kalmunai</option>
                <option value="Trincomalee">Trincomalee</option>
                <option value="Vakarai">Vakarai</option>
                <option value="Anuradhapura">Anuradhapura</option>
                <option value="Mihintale">Mihintale</option>
                <option value="Polonnaruwa">Polonnaruwa</option>
                <option value="Chilaw">Chilaw</option>
                <option value="Kuliyapitiya">Kuliyapitiya</option>
                <option value="Kurunegala">Kurunegala</option>
                <option value="Puttalam">Puttalam</option>
                <option value="Jaffna">Jaffna</option>
                <option value="Kilinochchi">Kilinochchi</option>
                <option value="Point Pedro">Point Pedro</option>
                <option value="Valvedditturai">Valvedditturai</option>
                <option value="Vavuniya">Vavuniya</option>
                <option value="Kegalle">Kegalle</option>
                <option value="Ratnapura">Ratnapura</option>
                <option value="Ambalangoda">Ambalangoda</option>
                <option value="Bentota">Bentota</option>
                <option value="Devinuwara">Devinuwara</option>
                <option value="Galle">Galle</option>
                <option value="Hikkaduwa">Hikkaduwa</option>
                <option value="Koggala">Koggala</option>
                <option value="Matara">Matara</option>
                <option value="Mirissa city">Mirissa city</option>
                <option value="Talpe">Talpe</option>
                <option value="Tangalle">Tangalle</option>
                <option value="Unawatuna">Unawatuna</option>
                <option value="Weligama">Weligama</option>
                <option value="Badulla">Badulla</option>
                <option value="Ella Town">Ella Town</option>
                <option value="Haputale">Haputale</option>
                <option value="Kataragama">Kataragama</option>
                <option value="Monaragala">Monaragala</option>
                <option value="Wellawaya">Wellawaya</option>
                <option value="Beruwala">Beruwala</option>
                <option value="Colombo">Colombo</option>
                <option value="Battaramulla">Battaramulla</option>
                <option value="Gampaha">Gampaha</option>
                <option value="Hanwella Ihala">Hanwella Ihala</option>
                <option value="Hendala">Hendala</option>
                <option value="Horana South">Horana South</option>
                <option value="Horawala Junction">Horawala Junction</option>
                <option value="Ja Ela">Ja Ela</option>
                <option value="Kalutara">Kalutara</option>
                <option value="Kandana">Kandana</option>
                <option value="Katunayaka">Katunayaka</option>
                <option value="Kelaniya">Kelaniya</option>
                <option value="Kotikawatta">Kotikawatta</option>
                <option value="Minuwangoda">Minuwangoda</option>
                <option value="Mulleriyawa">Mulleriyawa</option>
                <option value="Negombo">Negombo</option>
                <option value="Panadura">Panadura</option>
                <option value="Peliyagoda">Peliyagoda</option>
                <option value="Pita Kotte">Pita Kotte</option>
                <option value="Sri Jayewardenepura Kotte">
                  Sri Jayewardenepura Kotte
                </option>
                <option value="Wattala">Wattala</option>
                <option value="Welisara">Welisara</option>
      </select>


      <select
        name="adult"
        className="form-control tm-select"
        id="adult"
        value={adults}
        onChange={(e) => setAdults(e.target.value)}
      >
       <option value="">Select number of adults</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
      </select>

      <select
        name="children"
        className="form-control tm-select"
        id="child"
        value={children}
        onChange={(e) => setChildren(e.target.value)}
      >
    <option value="">Select number of children</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
      </select>

      <select
        name="room"
        className="form-control tm-select"
        id="room"
        value={rooms}
        onChange={(e) => setRooms(e.target.value)}
      >
         <option value="">Select number of rooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
      </select>

      <DatePicker
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          placeholderText="Check-in"
          selectsStart
          startDate={checkInDate}
          endDate={checkOutDate}
        />
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          placeholderText="Check-out"
          selectsEnd
          startDate={checkInDate}
          endDate={checkOutDate}
          minDate={checkInDate || new Date()}
        />


      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>

    <div className="card">
  <div className="recipecard-container">
    {/* Display the list of hotels */}
    {isLoading ? (
      // Show loading indicator
      <div className="text-center">
        <p>Loading...</p>
      </div>
    ) : (
      hotels.map((hotel) => (
        <div className="t-card" key={hotel.id} onClick={() => handleCardClick(hotel)}>
          <div className="t-image">
            <img src={hotel.image_url} alt={hotel.title} />
          </div>
          <div className="t-card-content">
            <h2>{hotel.title}</h2>
            <p>{hotel.address}</p>
            <p>{hotel.price}</p>
            <p>{hotel.description}</p>
            <a href={hotel.url} target="_blank" rel="noopener noreferrer">Booking Details</a>
          </div>
        </div>
      ))
    )}
  </div>
</div>
    </div>
   
  );
}

export default Card;
