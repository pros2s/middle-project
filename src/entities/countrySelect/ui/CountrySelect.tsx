import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomSelect } from 'shared/ui/Popups';

import { Country } from '../model/types/Country';

interface CountrySelectProps {
  readOnly?: boolean;
  country?: Country;
  onChange?: (value: Country) => void;
}

export const CountrySelect = memo(
  ({ readOnly, country, onChange }: CountrySelectProps) => {
    const { t } = useTranslation('profilePage');

    const countryOptions = useMemo(
      () =>
        Object.entries(Country).map((val) => ({
          value: val[0],
          content: val[1],
        })),
      [],
    );

    const changeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    return (
      <CustomSelect
        label={t('ProfileCountry')}
        readonly={readOnly}
        items={countryOptions}
        onChange={changeHandler}
        value={country}
        defaultValue={Country.RUSSIA}
      />
    );
  },
);
