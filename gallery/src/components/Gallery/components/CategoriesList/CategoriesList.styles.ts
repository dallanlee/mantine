import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.md,

    '@media (max-width: 755px)': {
      display: 'block',
    },
  },

  title: {
    fontWeight: 500,
    lineHeight: 1,
  },

  count: {
    marginLeft: theme.spacing.md,
    marginTop: 4,

    '@media (max-width: 755px)': {
      marginTop: theme.spacing.xs,
      marginLeft: 0,
    },
  },

  group: {
    '& + &': {
      marginTop: theme.spacing.xl * 2,
    },
  },
}));
