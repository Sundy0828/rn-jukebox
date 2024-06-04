import { View, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { customStyles } from "./Signup.style";
import useStyles from "../../utilities/useStyles";
import {
  isNullOrEmpty,
  isStrongPassword,
  isValidEmail,
} from "../../utilities/validateUtils";
import { BasicButton, Input } from "../../components";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const styles = useStyles(customStyles);

  const signUp = async () => {
    setLoading(true);

    try {
      if (!isValidEmail(email)) {
        throw "Invalid Email";
      }
      if (isNullOrEmpty(password)) {
        throw "Invalid Password";
      }
      if (isNullOrEmpty(confirmPassword)) {
        throw "Invalid Confirm Password";
      }
      if (password != confirmPassword) {
        throw "Password and Confirm Password don't match";
      }
      if (!isStrongPassword(password)) {
        throw "Not a strong enough password";
      }

      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
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
          value={email}
          label="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          value={password}
          label="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          value={password}
          label="Confirm Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <BasicButton
          title="Create Account"
          loading={loading}
          onPress={signUp}
          icon="SIGNUP"
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
