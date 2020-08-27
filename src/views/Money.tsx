import React from 'react'
import Layout from 'components/Layout';
import styled from 'styled-components';
import TagsSection from './Money/TagsSection';
import NotesSection from './Money/NotesSection';
import TypesSection from './Money/TypesSection';
import NumberPadSection from './Money/NumberPadSection';




const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
function Money() {
    return (
        <MyLayout>
            <TagsSection />
            <NotesSection />
            <TypesSection />
            <NumberPadSection>
                <div className="output">100</div>
                <div className="pad clearfix">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="ok">OK</button>
                    <button className="zero">0</button>
                    <button className="dot">.</button>
                </div>
            </NumberPadSection>
        </MyLayout>
    );
}

export default Money;