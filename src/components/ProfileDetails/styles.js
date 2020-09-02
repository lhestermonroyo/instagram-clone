export const styles = (theme) => ({
  profileDetails: {
    marginBottom: theme.spacing(10),
  },
  profileAvatarContainer: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileAvatar: {
    height: 150,
    width: 150,
  },
  profileDetailsContainer: {
    marginTop: theme.spacing(2),
  },
  profileUsernameContainer: {
    display: 'flex',
    marginBottom: theme.spacing(3),
    '& > h4': {
      marginRight: theme.spacing(2),
    },
    '& > button': {
      marginRight: theme.spacing(1),
    },
  },
  profileUsername: {
    fontWeight: 300,
  },
});
