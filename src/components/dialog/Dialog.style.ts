import { Theme } from "../../utilities/useColors";

export const customStyles = (theme: Theme) => ({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  dialog: {
    width: 300,
    padding: 20,
    borderRadius: 8,
    backgroundColor: theme.light,
    elevation: 24, // for Android shadow
    shadowColor: theme.dark, // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    padding: 10,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
    color: theme.primary,
  },
  confirmButton: {
    backgroundColor: theme.primary,
    borderRadius: 4,
  },
  confirmButtonText: {
    color: theme.white,
  },
});
