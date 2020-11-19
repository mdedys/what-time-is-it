import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
  AutocompleteChangeReason,
  AutocompleteChangeDetails,
} from "@material-ui/lab/Autocomplete";

import Dataset, { CityData } from "../data/city-data";

interface Props {
  value: CityData | null;
  onChange(
    evt: React.ChangeEvent<{}>,
    value: CityData | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<CityData> | undefined
  ): void;
}

const FILTER_OPTIONS = createFilterOptions<CityData>({
  matchFrom: "start",
  limit: 50,
});

export default React.memo(function CityAutocomplete(props: Props) {
  const [autoHighlight, setAutoHighlight] = React.useState<boolean>(false);

  return (
    <Autocomplete
      autoHighlight={autoHighlight}
      autoComplete
      autoSelect
      blurOnSelect
      options={Dataset.get()}
      filterOptions={FILTER_OPTIONS}
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
});
