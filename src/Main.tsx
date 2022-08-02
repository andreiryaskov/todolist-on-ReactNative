import {FlatList, ListRenderItem, StyleSheet, Text, View} from "react-native";
import {useState} from "react";
import {CARD, CONTENT, PADDING, TEXT, WIDTH} from "./const";


type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

const Main = () => {

    const [tasks, setTasks] = useState<TaskType[]>([
        {
            id: 1,
            title: 'HTML',
            isDone: true
        },
        {
            id: 2,
            title: 'ReactNative',
            isDone: false
        },
        {
            id: 3,
            title: 'CSS',
            isDone: true
        },
        {
            id: 4,
            title: 'Webpack',
            isDone: false
        }
    ])

    const render: ListRenderItem<TaskType> = ({item}) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.check}>{item.isDone ? 'true' : 'false'}</Text>
            </View>
        )
    }


    return (
        <View>
            <FlatList
                data={tasks}
                renderItem={render}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        width: WIDTH - (PADDING * 2),
        // height: HEIGHT - (PADDING * 2)
        backgroundColor: CARD,
        marginVertical: 5,
        paddingHorizontal: PADDING,
        borderRadius: PADDING / 4
    },
    title: {
        color: TEXT,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 28
    },
    check: {
        color: CONTENT
    }
})

export default Main;
