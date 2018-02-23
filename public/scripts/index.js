
class CityProfile extends React.Component {

    componentDidMount() {
        this.CityProfile();
    }

    CityProfile() {
        $.getJSON('https://ipinfo.io/json')
            .then(function(response){
                const city = response.city;
                $.getJSON(
                    "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=d9689e6a420fb4c2f041ae1549c0120a",
                    function(data) {
                        const icon = data.weather[0].icon;
                        $('.icon').html("<img src = 'http://openweathermap.org/img/w/" + icon + ".png' > ");
                        $('.temp').html(data.main.temp + "&deg;"+ "F" );

                        $('.city').html(city);
                        $('.condition').html(data.weather[0].description);
                        $('.wind').html(data.wind.speed);



                    });
            });

    }

    render() {
        return (

            <div id="layout-content" className="layout-content-wrapper">
            <div className="weather">
            <div className="icon">   </div>
            <div className="temp">   </div>
            <div>   </div>
            </div>
            <div className="city"> </div>
            <div className="condition"></div>
            <div className="wind"></div>
            </div>
    );
    }
}


ReactDOM.render(<CityProfile />, document.getElementById('content'));