import React, { forwardRef } from 'react';
import {
  useMantineTheme,
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  ClassNames,
  useExtractedMargins,
} from '@mantine/styles';
import useStyles from './Burger.styles';

export type BurgerStylesNames = Exclude<ClassNames<typeof useStyles>, 'opened'>;

export interface BurgerProps
  extends DefaultProps<BurgerStylesNames>,
    React.ComponentPropsWithoutRef<'button'> {
  /** Burger state: true for cross, false for burger */
  opened: boolean;

  /** Burger color value, not connected to theme.colors, defaults to theme.black with light color scheme and theme.white with dark */
  color?: MantineColor;

  /** Predefined burger size or number to set width and height in px */
  size?: MantineNumberSize;
}

export const Burger = forwardRef<HTMLButtonElement, BurgerProps>(
  (
    {
      className,
      style,
      opened,
      color,
      size = 'md',
      classNames,
      styles,
      sx,
      ...others
    }: BurgerProps,
    ref
  ) => {
    const theme = useMantineTheme();
    const _color = color || (theme.colorScheme === 'dark' ? theme.white : theme.black);
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const { classes, cx } = useStyles(
      { color: _color, size },
      { classNames, styles, sx, name: 'Burger' }
    );

    return (
      <button
        type="button"
        className={cx(classes.root, className)}
        ref={ref}
        style={mergedStyles}
        {...rest}
      >
        <div className={cx(classes.burger, { [classes.opened]: opened })} />
      </button>
    );
  }
);

Burger.displayName = '@mantine/core/Burger';
