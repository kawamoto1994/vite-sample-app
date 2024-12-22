import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/css/common.css';
import Container from '../_components/Container';
import Heading1 from '../_components/Heading1';
import Heading2 from '../_components/Heading2';
import Heading3 from '../_components/Heading3';
import Heading4 from '../_components/Heading4';
import CatchCopy from '../_components/CatchCopy';
import Text from '../_components/Text';
import Image from '../_components/Image';
import Grid from '../_components/Grid';
import GridItem from '../_components/GridItem';
import Button from '../_components/Button';
import Box from '../_components/Box';
import AddTaskForm from '../_components/AddTaskForm';
export default function PartsSet() {
  return (
    <>
    <Heading1 title="パーツセット" />
    <div className="l-content">
      <Container>
        <Heading2 title="見出し" />
          <Heading2 title="h2見出しが入ります" />
          <Heading3 title="h3見出しが入ります" />
          <Heading4 title="h4見出しが入ります" />
        <Heading2 title="キャッチコピー" />
          <CatchCopy title="キャッチコピーが入ります" />
        <Heading2 title="通常テキスト" />
          <Text>通常テキストが入ります</Text>
          <Text>通常テキストで<a href="◾️◾️◾️未設定◾️◾️◾️">リンクを使用します。</a></Text>
        <Heading2 title="画像" />
        <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
        <Heading2 title="カラム割" />
        <Heading3 title="1カラム" />
        <Grid>
          <GridItem>
            <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
            <Text>通常テキストが入ります</Text>
          </GridItem>
          <GridItem>
            <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
            <Text>通常テキストが入ります通常テキストが入ります通常テキストが入ります通常テキストが入ります</Text>
          </GridItem>
          <GridItem>
            <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
          </GridItem>
          <GridItem>
            <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
          </GridItem>
          </Grid>
        <Heading3 title="2カラム" />
        <Grid column={2}>
          <GridItem>
            <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
            <Text>通常テキストが入ります</Text>
          </GridItem>
          <GridItem>
            <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
            <Text>通常テキストが入ります通常テキストが入ります通常テキストが入ります通常テキストが入ります</Text>
          </GridItem>
          <GridItem>
            <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
          </GridItem>
          <GridItem>
            <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
          </GridItem>
        </Grid>
        <Heading3 title="3カラム" />
        <Grid column={3}>
          <GridItem>
            <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
            <Text>通常テキストが入ります</Text>
          </GridItem>
          <GridItem>
            <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
            <Text>通常テキストが入ります通常テキストが入ります通常テキストが入ります通常テキストが入ります</Text>
          </GridItem>
          <GridItem>
            <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
          </GridItem>
          <GridItem>
            <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
          </GridItem>
        </Grid>
        <Heading3 title="4カラム" />
        <Grid column={4}>
          <GridItem>
            <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
            <Text>通常テキストが入ります</Text>
          </GridItem>
          <GridItem>
            <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
            <Text>通常テキストが入ります通常テキストが入ります通常テキストが入ります通常テキストが入ります</Text>
          </GridItem>
          <GridItem>
            <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
          </GridItem>
          <GridItem>
            <Image src="/assets/images/p_sample.webp" alt="サンプル画像1" width="600" height="600" />
          </GridItem>
        </Grid>
        <Heading2 title="ボタン" />
        <Heading3 title="幅成り行きの場合" />
        <Button title="ボタンのテキストが入ります" />
        <Grid column={2}>
          <GridItem>
            <Button title="ボタンのテキストが入りますボタンのテキストが入ります" />
          </GridItem>
          <GridItem>
            <Button title="ボタンのテキストが入ります" />
          </GridItem>
        </Grid>
        <Heading3 title="100%幅の場合" />
        <Grid column={2}>
          <GridItem>
            <Button title="ボタンのテキストが入りますボタンのテキストが入ります" className="w-full" />
          </GridItem>
          <GridItem>
            <Button title="ボタンのテキストが入ります" className="w-full" />
          </GridItem>
        </Grid>
        <Heading2 title="枠付き" />
          <Box>
            Boxの内容が入ります
          </Box>
        <Heading2 title="タスク追加" />
        <AddTaskForm />
      </Container>
    </div>
    </>
  );
}

ReactDOM.render(<PartsSet />, document.getElementById('root'));
