import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function DropList({ palestinianCities, city, setCity, message }) {
    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <FormControl fullWidth size="large">
            <InputLabel>{message}</InputLabel>
            <Select
                value={city}
                label={message}
                onChange={handleChange}
                fullWidth
                MenuProps={{
                    PaperProps: {
                        style: {
                        maxHeight: 200,  
                        },
                    },
                }}
            >
                {palestinianCities.map((c) => (
                    <MenuItem key={c} value={c}>
                        {c}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
