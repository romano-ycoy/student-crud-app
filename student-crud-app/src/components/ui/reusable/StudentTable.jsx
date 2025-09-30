import { Pencil, Trash } from "lucide-react";

const StudentTable = ({ students, onEdit, onDelete }) => {
    return (
        <table className="table-auto w-full border-collapse border border-gray-300 mt-6 rounded-xl">
            <thead>
                <tr className="bg-gray-100 text-left">
                    <th className="border border-gray-300 px-4 py-2">#</th>
                    <th className="border border-gray-300 px-4 py-2">First Name</th>
                    <th className="border border-gray-300 px-4 py-2">Last Name</th>
                    <th className="border border-gray-300 px-4 py-2">Email</th>
                    <th className="border border-gray-300 px-4 py-2">Mobile Number</th>
                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {students.length > 0 ? (
                    students.map((student, index) => (
                        <tr key={student.id} className="hover:-bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-300 px-4 py-2">{student.firstName}</td>
                            <td className="border border-gray-300 px-4 py-2">{student.lastName}</td>
                            <td className="border border-gray-300 px-4 py-2">{student.email}</td>
                            <td className="border border-gray-300 px-4 py-2">{student.mobileNumber}</td>
                            {/* <td className="border border-gray-300 px-4 py-2">{student.age}</td> */}
                            {/* <td className="border border-gray-300 px-4 py-2">{student.course}</td> */}
                            <td className="border border-gray-300 px-4 py-2">
                                <button
                                    onClick={() => onEdit(student)}
                                    title="Edit"
                                    className="text-blue-500 hover:text-blue-700">
                                    <Pencil size={18} />
                                </button>
                                <button
                                    onClick={() => onDelete(student.id)}
                                    title="Delete"
                                    className="text-red-500 hover:text-red-700">
                                    <Trash size={18} />
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td
                            colSpan="5"
                            className="text-center py-4 text-gray-500 italic">
                            No students found
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default StudentTable;