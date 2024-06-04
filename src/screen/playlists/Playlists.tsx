import { View, Button } from "react-native";
import React, { useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../../Firebase";
import { SONGS_SCREEN } from "../screenConstatns";
import { FAB } from "../../components";
import useStyles from "../../utilities/useStyles";
import { customStyles } from "./Playlists.style";
import AreYouSureDialog from "../../components/dialog/ays/AreYouSureDialog";
import InputDialog from "../../components/dialog/input/InputDialog";
import OptionsDialog from "../../components/dialog/options/OptionsDialog";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Playlists = ({ navigation }: RouterProps) => {
  const styles = useStyles(customStyles);

  const [dialogVisible, setDialogVisible] = useState(false);

  const showDialog = () => {
    setDialogVisible(true);
  };

  const hideDialog = () => {
    setDialogVisible(false);
  };

  const confirmDialog = () => {
    // Handle the confirmation action
    setDialogVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        onPress={() => navigation.navigate(SONGS_SCREEN)}
        title="View Playlist"
      />
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
      <View style={styles.fab}>
        <FAB icon="ADD" onPress={showDialog} />
      </View>
      {/* <AreYouSureDialog
        visible={dialogVisible}
        title="Add a new playlist?"
        content="This is the dialog content."
        onClose={hideDialog}
        onConfirm={confirmDialog}
      /> */}
      <InputDialog
        visible={dialogVisible}
        title="Add a new playlist?"
        placeholder="Playlist name"
        onClose={hideDialog}
        onSubmit={confirmDialog}
      />
      {/* <OptionsDialog
        visible={dialogVisible}
        title="Song options based on input:"
        onClose={hideDialog}
        onSelect={confirmDialog}
        options={["song 1", "song 2"]}
      /> */}
    </View>
  );
};

export default Playlists;
