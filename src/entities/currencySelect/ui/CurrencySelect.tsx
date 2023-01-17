import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomSelect } from '@/shared/ui/Popups';

import { Currency } from '../model/types/Currency';

interface CurrencySelectProps {
  readOnly?: boolean;
  currency?: Currency;
  onChange?: (value: Currency) => void;
}

export const CurrencySelect = memo(
  ({ readOnly, currency, onChange }: CurrencySelectProps) => {
    const { t } = useTranslation('profilePage');

    const currencyOptions = useMemo(
      () =>
        Object.entries(Currency).map((val) => ({
          value: val[0],
          content: val[1],
        })),
      [],
    );

    const changeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    return (
      <CustomSelect
        label={t('ProfileCurrency')}
        readonly={readOnly}
        items={currencyOptions}
        onChange={changeHandler}
        value={currency}
        defaultValue={Currency.RUB}
      />
    );
  },
);
