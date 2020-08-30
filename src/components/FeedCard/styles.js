export const styles = (theme) => ({
  feedCard: {
    marginBottom: theme.spacing(6),
  },
  carouselPaper: {
    height: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#dbdbdb',
  },
  carouselImage: {
    height: '100%',
  },
  cardActions: {
    marginTop: theme.spacing(-4),
    width: '100%',
  },
  cardActionButtons: {
    padding: theme.spacing(0),
    margin: theme.spacing(1),
    '&:hover': {
      background: 'none',
    },
  },
  buttonIcons: {
    fontSize: 24,
  },
  bookMarkButton: {
    float: 'right',
    marginTop: theme.spacing(-5),
    marginRight: theme.spacing(1.5),
  },
  inactiveIndicators: {
    fontSize: 11,
  },
  indicator: {
    fontSize: 11,
    color: '#0095F6',
  },
  timePostedLabel: {
    fontSize: 10,
  },
  cardComment: {
    borderTop: '1px solid #DBDBDB',
  },
  formcontrol: {
    width: '100%',
  },
  commentSubmitButton: {
    color: '#0095F6',
  },
});
