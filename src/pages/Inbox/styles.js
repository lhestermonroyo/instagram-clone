export const styles = (theme) => ({
  inboxCard: {
    height: '100%',
  },
  inboxListContainer: {
    borderRight: '1px solid #DBDBDB',
  },
  inboxListHeader: {
    borderBottom: '1px solid #DBDBDB',
  },
  actionButton: {
    marginTop: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
    borderBottom: '1px solid #DBDBDB',
  },
  inboxTab: {
    width: 40,
    minWidth: 40,
  },
  inboxPrimaryList: {
    overflowY: 'auto',
    height: 450,
  },
  inboxGeneralList: {
    overflowY: 'auto',
    height: 450,
  },
  inboxDefaultScreen: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  circle: {
    border: '2px solid #262626',
    padding: theme.spacing(2),
    borderRadius: 50,
    marginBottom: theme.spacing(2),
  },
  sendIcon: {
    fontSize: 48,
  },
  sendMessageButton: {
    marginTop: theme.spacing(2),
  },
});
