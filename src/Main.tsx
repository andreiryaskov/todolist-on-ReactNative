import {FlatList, ListRenderItem, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {CARD, CONTENT, PADDING, RADIUS, TEXT, WIDTH} from "./const";
import {RemoveIcon} from "./icons/Remove";


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
    const [value, setValue] = useState('')

    const render: ListRenderItem<TaskType> = ({item}) => {
        return (
            <View style={styles.item}>
                <View style={styles.box}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.check}
                          onPress={() => updateStatus(item.id)}>{item.isDone ? 'true' : 'false'}</Text>
                    {/*<Text onPress={() => removeTask(item.id)}>X</Text>*/}
                </View>
                <View>
                    <Pressable onPress={() => removeTask(item.id)}>
                        <RemoveIcon />
                    </Pressable>
                </View>


            </View>
        )
    }

    const addTask = () => {
        const newTask: TaskType = {id: tasks.length + 1, title: value, isDone: false}
        setTasks([newTask, ...tasks])
        setValue('')
    }

    const removeTask = (id: number) => {
        setTasks(tasks.filter(t => (t.id !== id)))
    }

    const updateStatus = (id: number) => {
        setTasks(tasks.map(t => (t.id === id ? {...t, isDone: !t.isDone} : t)))
    }


    return (
        <View>
            <View style={styles.input_box}>
                <TextInput style={styles.input} onChangeText={setValue} value={value}/>
                <TouchableOpacity onPress={addTask}>
                    <Text style={styles.add_task_button}>Add</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={tasks}
                renderItem={render}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input_box: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: {
        height: 36,
        width: WIDTH - (PADDING * 2) - 50,
        borderWidth: 1,
        borderRadius: RADIUS
    },
    add_task_button: {
        fontSize: 20
    },
    item: {
        width: WIDTH - (PADDING * 2),
        // height: HEIGHT - (PADDING * 2)
        backgroundColor: CARD,
        marginVertical: 5,
        paddingHorizontal: PADDING,
        borderRadius: RADIUS,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    box: {
        flexDirection: "column",
        justifyContent: "space-between"
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
