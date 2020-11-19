import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

import Dataset, { CityData } from "../data/city-data";

interface Props {
  value: CityData | null;
  onChange(evt, value: CityData): void;
}

export default function CityAutocomplete(props: Props) {
  const [autoHighlight, setAutoHighlight] = React.useState<boolean>(false);

  const options = React.useMemo(() => {
    return Dataset.getCities();
  }, []);

  const filterOptions = React.useMemo(
    () =>
      createFilterOptions({
        matchFrom: "start",
        limit: 50,
      }),
    []
  );

  console.log("autoHighlight: ", autoHighlight);

  return (
    <Autocomplete
      autoHighlight={autoHighlight}
      autoComplete
      autoSelect
      blurOnSelect
      options={options}
      filterOptions={filterOptions}
      getOptionLabel={(data: CityData) => data.city}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Enter a city"
          variant="standard"
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            setAutoHighlight(evt.target.value.length > 0)
          }
          fullWidth
        />
      )}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
