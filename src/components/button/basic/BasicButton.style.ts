import { Theme } from "../../../utilities/useColors";

export const customStyles = (theme: Theme) => ({
  button: {
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
