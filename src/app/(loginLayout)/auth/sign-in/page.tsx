"use client";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Container,
  Divider,
  Form,
  FormBox,
  Input,
  LoginButton,
  SocialLoginButton,
  SubText,
  Title,
} from "../styles";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { status } = useSession();
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      username: email,
      password,
    });

    if (result?.error) {
    } else {
      router.push("/"); // 로그인 성공 후 메인 페이지로 이동
    }
  };

  return (
    <Container>
      <FormBox>
        <Title>로그인</Title>
        <SubText>{status}</SubText>
        <SubText>이메일과 비밀번호를 입력하세요.</SubText>
        <Form onSubmit={handleSignIn}>
          <Input
            type="text"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* <ForgotPassword>비밀번호를 잊었나요?</ForgotPassword> */}
          <LoginButton type="submit">로그인</LoginButton>
        </Form>
        {/* <SignUpText>
          계정이 없으신가요? <a href="/auth/sign-up">계정생성</a>
        </SignUpText> */}
        <Divider />
        <SocialLoginButton
          color="#FEE500"
          $textcolor="#000"
          onClick={() => signIn("kakao", { callbackUrl: "/home" })}
        >
          카카오 로그인
        </SocialLoginButton>
        <SocialLoginButton color="#DB4437">구글 로그인</SocialLoginButton>
        <SocialLoginButton color="#1877F2">페이스북 로그인</SocialLoginButton>
        <SocialLoginButton color="#03C75A">네이버 로그인</SocialLoginButton>
      </FormBox>
    </Container>
  );
};

export default Page;
