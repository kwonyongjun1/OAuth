import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SubText = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

export const ForgotPassword = styled.a`
  text-align: right;
  font-size: 12px;
  color: #666;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  padding: 12px;
  background: #4a4a4a;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #333;
  }
`;

export const SignUpText = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;

export const Divider = styled.hr`
  margin: 20px 0;
  border: 0.5px solid #ddd;
`;

export const SocialLoginButton = styled.button<{
  color: string;
  $textcolor?: string;
}>`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => props.$textcolor || "#fff"};
  background-color: ${(props) => props.color};
  margin-top: 10px;
  &:hover {
    opacity: 0.8;
  }
`;
