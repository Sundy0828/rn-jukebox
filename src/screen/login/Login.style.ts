import { Theme } from "../../utilities/useColors";

export const customStyles = (theme: Theme) => ({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: theme.light,
  },
});
