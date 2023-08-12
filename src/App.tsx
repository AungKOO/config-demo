import {
  Button,
  Text,
  Input,
  Group,
  Stack,
  Checkbox,
  CloseButton,
} from "@mantine/core";
import "./App.css";
import { useRef, useState } from "react";
function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Project",
      complete: false,
    },
    {
      id: 2,
      title: "Finish Presentation",
      complete: false,
    },
  ]);

  // add item
  const onAddHandle = () => {
    if (inputRef.current?.value) {
      setTodos([
        ...todos,
        {
          id: Math.random(),
          title: inputRef.current.value,
          complete: false,
        },
      ]);
    }
  };

  // add item by enter
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAddHandle();
    }
  };

  // delete item
  const deleteItem = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      })
    );
  };

  return (
    <Stack p={24}>
      <Group>
        <Input
          ref={inputRef}
          placeholder="Enter your tasks"
          onKeyDown={handleKeyPress}
        />
        <Button radius={"xl"} onClick={onAddHandle}>
          Add
        </Button>
      </Group>
      <Text>Test vercel deployment</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        omnis facere magnam quod inventore culpa libero saepe! Voluptatibus,
        nihil ratione aut beatae aperiam alias? Fugiat numquam rem doloremque
        eum ab.
      </Text>
      <Text fz={48} fw={"bold"}>
        To do lists:
      </Text>
      <Stack spacing={3}>
        {todos.map((todo) => (
          <Group position="apart">
            <Checkbox
              key={todo.id}
              label={todo.title}
              size={"md"}
              style={{
                textDecoration: todo.complete ? "line-through" : "none",
              }}
              onClick={() => toggleComplete(todo.id)}
            />

            <CloseButton
              title="Close popover"
              size="xl"
              iconSize={20}
              color="red"
              variant="transparent"
              onClick={() => deleteItem(todo.id)}
            />
          </Group>
        ))}
      </Stack>
    </Stack>
  );
}

export default App;
