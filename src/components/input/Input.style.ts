import { Theme } from "../../utilities/useColors";

export const customStyles = (theme: Theme) => ({
  container: {
    marginBottom: 20,
  },
  label: {
    position: "absolute",
    left: 0,
    fontSize: 16,
  },
  input: {
    height: 40,
    fontSize: 16,
    color: theme.black,
    borderBottomWidth: 1,
    borderBottomColor: theme.dark,
  },
  underline: {
    height: 2,
    marginTop: -2,
  },
});
