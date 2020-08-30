export const styles = (theme) => ({
  feedCard: {
    marginBottom: theme.spacing(6),
  },
  redItems: {
    color: '#ED4956',
  },
  moreItems: {
    textAlign: 'center',
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  carouselPaper: {
    height: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#dbdbdb',
  },
  singleImage: {
    marginBottom: theme.spacing(3.2),
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
  feedLikesContainer: {
    margin: theme.spacing(-2.5, 0, 1),
    display: 'flex',
  },
  feedLikesAvatar: {
    height: 25,
    width: 25,
  },
  feedLikesLabel: {
    lineHeight: 1.8,
    marginLeft: theme.spacing(1),
  },
  viewCommentButton: {
    textDecoration: 'none',
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
