import { Icon } from "semantic-ui-react";

export default function Error404() {
  return (
    <div style={{ padding: "200px 0", textAlign: "center", fontSize: 30 }}>
      <Icon name="warning circle" color="red" />
      404 : 페이지를 찾을 수 없습니다.
    </div>
  );
}

//자주 사용되는 에러페이지를 서버에서 렌더링하면 비용이 증가하고 비교적 느리므로 따로 생성해줌
//개발자가 아니라 프로덕트모드로 빌드해서 확인해야함
