// Icons
import AddIcon from "@mui/icons-material/Add";

// Components
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-mui";
import {
    Stack,
    Button,
} from "@mui/material";


export default function AddTaskComponent({ 
                            tasks, 
                            setTasks,
                            }) {

    function addTaskToList(taskName) {
        const newTask = {
            id: crypto.randomUUID(),
            text: taskName.trim(),
            
            isCompleted: false, //for task completion
            isEditing: false, //for task editing
        };

        setTasks([...tasks, newTask]);
    }

    // Yup validation schema
    const TaskSchema = Yup.object().shape({
        taskName: Yup.string()
            .min(3, "Task must be at least 3 characters")
            .max(100, "Task must be less than 100 characters")
            .required("Task is required"),
    });

    return (
        <Stack  direction="column" justifyContent="center" alignItems="center">
            <Formik
                initialValues={{ taskName: "" }}
                validationSchema={TaskSchema}
                onSubmit={(values, { resetForm }) => {
                    addTaskToList(values.taskName);
                    resetForm();
                }}
            >
                {({ values, errors, touched, setFieldValue }) => (
                    <Form justifyContent='center' alignItems='center' style={{ 
                        width: "100%",
                    }}>
                        <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
                            <Field
                                component={TextField}
                                name="taskName"
                                label="Enter a task:"
                                variant="filled"
                                id="add-task-text-field"
                            />

                            <Button
                                variant="contained"
                                size="large"
                                color="primary"
                                startIcon={<AddIcon id="add-task-icon" />}
                                sx={{
                                    backgroundColor: "#f8d000",
                                    boxShadow: "none",
                                    color: "black",
                                    padding: "10px 30px",
                                    fontWeight: 'bold'
                                }}
                                id="add-task-btn"
                                type="submit"
                                
                            >
                                Add Task
                            </Button>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </Stack>
    );
}