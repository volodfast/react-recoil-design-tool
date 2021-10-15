export type DetailProps = {
  label: string;
  value: string;
};

export type DetailFallbackProps = Omit<DetailProps, 'value'>;
