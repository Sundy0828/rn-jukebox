import { View, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { customStyles } from "./Login.style";
import useStyles from "../../utilities/useStyles";
import { BasicButton, Input } from "../../components";
import { isNullOrEmpty, isValidEmail } from "../../utilities/validateUtils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const styles = useStyles(customStyles);

  const signIn = async () => {
    setLoading(true);
    try {
      if (!isValidEmail(email)) {
        throw "Invalid Email";
      }
      if (isNullOrEmpty(password)) {
        throw "Invalid Password";
      }
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Input
          style={styles.input}
          value={email}
          label="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          style={styles.input}
          value={password}
          label="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <BasicButton
          title="Login"
          loading={loading}
          onPress={signIn}
          icon="LOGIN"
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
