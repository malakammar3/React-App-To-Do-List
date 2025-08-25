import './DropList.css';

export default function DropList({palestinianCities, city, setCity, message}) {

    return(
        <div className='selectCity'>
            {/* input (e) */}
            {/* {} when we are writing block of code */}
            {/* () when we want to return sth */}
            <select required value={city} onChange={ (e) => {
                setCity(e.target.value)

            }} >
                <option value="" disabled>{message}</option>
                {
                    palestinianCities.map((cityName) => (
                        <option key={cityName} value={cityName}>
                            {cityName}
                        </option>
                    )
                    )
                }
            </select>
        </div>

    );
}   