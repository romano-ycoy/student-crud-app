import { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import StudentTable from '../components/ui/reusable/StudentTable';
import Button from '../components/ui/reusable/Button';
import Modal from '../components/ui/reusable/Modal';
import InputField from '../components/ui/reusable/InputField';


const Registration = () => {
    const [students, setStudents] = useState([
        { id: 1, firstName: "Laura", lastName: "Harris", email: "lauraharris1@gmail.com", mobileNumber: "09747472524" },
        { id: 2, firstName: "Emily", lastName: "Thomas", email: "emilythomas2@gmail.com", mobileNumber: "09467510526" },
        { id: 3, firstName: "Harper", lastName: "Lee", email: "harperlee3@gmail.com", mobileNumber: "09728153788" },
        { id: 4, firstName: "Noah", lastName: "Hall", email: "noahhall4@gmail.com", mobileNumber: "09284414513" },
        { id: 5, firstName: "Joshua", lastName: "Thompson", email: "joshuathompson5@gmail.com", mobileNumber: "09958416644" },
        { id: 6, firstName: "Robert", lastName: "Miller", email: "robertmiller6@gmail.com", mobileNumber: "09946139835" },
        { id: 7, firstName: "David", lastName: "Miller", email: "davidmiller7@gmail.com", mobileNumber: "09398931701" },
        { id: 8, firstName: "Matthew", lastName: "Wright", email: "matthewwright8@gmail.com", mobileNumber: "09950908612" },
        { id: 9, firstName: "Daniel", lastName: "Smith", email: "danielsmith9@gmail.com", mobileNumber: "09458278670" },
        { id: 10, firstName: "John", lastName: "Doe", email: "johndoe10@gmail.com", mobileNumber: "09285830212" },
        { id: 11, firstName: "Liam", lastName: "Brown", email: "liambrown11@gmail.com", mobileNumber: "09186456256" },
        { id: 12, firstName: "Robert", lastName: "Robinson", email: "robertrobinson12@gmail.com", mobileNumber: "09610521787" },
        { id: 13, firstName: "Laura", lastName: "Lewis", email: "lauralewis13@gmail.com", mobileNumber: "09398467218" },
        { id: 14, firstName: "William", lastName: "Harris", email: "williamharris14@gmail.com", mobileNumber: "09912667038" },
        { id: 15, firstName: "Emma", lastName: "Moore", email: "emmamoore15@gmail.com", mobileNumber: "09075403045" },
        { id: 16, firstName: "James", lastName: "Harris", email: "jamesharris16@gmail.com", mobileNumber: "09780238757" },
        { id: 17, firstName: "William", lastName: "Miller", email: "williammiller17@gmail.com", mobileNumber: "09335143412" },
        { id: 18, firstName: "John", lastName: "Martinez", email: "johnmartinez18@gmail.com", mobileNumber: "09517161237" },
        { id: 19, firstName: "Robert", lastName: "White", email: "robertwhite19@gmail.com", mobileNumber: "09443078604" },
        { id: 20, firstName: "Olivia", lastName: "Thompson", email: "oliviathompson20@gmail.com", mobileNumber: "09463518034" },
        { id: 21, firstName: "Emily", lastName: "Taylor", email: "emilytaylor21@gmail.com", mobileNumber: "09689978070" },
        { id: 22, firstName: "Emma", lastName: "Jackson", email: "emmajackson22@gmail.com", mobileNumber: "09681535748" },
        { id: 23, firstName: "Sophia", lastName: "Clark", email: "sophiaclark23@gmail.com", mobileNumber: "09077512483" },
        { id: 24, firstName: "Amelia", lastName: "White", email: "ameliawhite24@gmail.com", mobileNumber: "09678701549" },
        { id: 25, firstName: "Noah", lastName: "Wilson", email: "noahwilson25@gmail.com", mobileNumber: "09205848288" },
        { id: 26, firstName: "Laura", lastName: "Thomas", email: "laurathomas26@gmail.com", mobileNumber: "09264154845" },
        { id: 27, firstName: "James", lastName: "White", email: "jameswhite27@gmail.com", mobileNumber: "09185586095" },
        { id: 28, firstName: "Emily", lastName: "Moore", email: "emilymoore28@gmail.com", mobileNumber: "09839953847" },
        { id: 29, firstName: "Sarah", lastName: "Young", email: "sarahyoung29@gmail.com", mobileNumber: "09243269204" },
        { id: 30, firstName: "James", lastName: "Wright", email: "jameswright30@gmail.com", mobileNumber: "09187371707" },
    ]);

    // header(search) + modal visibility state
    const [search, setSearch] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // prefix state
    const [prefix, setPrefix] = useState("");
    const [customPrefix, setCustomPrefix] = useState("");

    // add new student inputs state (controlled)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    // editing state
    const [editingStudent, setEditingStudent] = useState(null);

    // filter safely
    const filteredStudents = students.filter((student) =>
        (`${student.firstName ?? ""} ${student.lastName ?? ""}`)
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    // edit
    const handleEdit = (student) => {
        setEditingStudent(student);

        // Pre-fill the form fields
        setPrefix(student.prefix || "");
        setCustomPrefix(student.prefix === "Other" ? student.prefix : "");
        setFirstName(student.firstName);
        setLastName(student.lastName);
        setEmail(student.email || "");
        setMobileNumber(student.mobileNumber || "");

        // Open modal
        setIsModalOpen(true);
    };

    // delete
    const handleDelete = (id) => {
        setStudents((prev) => prev.filter((student) => student.id !== id));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const finalPrefix = prefix === "Other" ? customPrefix : prefix;

        if (editingStudent) {
            // update
            setStudents((prev) =>
                prev.map((s) =>
                    s.id === editingStudent.id
                        ? { ...s, prefix: finalPrefix, firstName, lastName, email, mobileNumber }
                        : s
                )
            );
        } else {
            // add
            const newStudent = {
                id: Date.now(),
                prefix: finalPrefix,
                firstName,
                lastName,
                email,
                mobileNumber,
            };
            setStudents((prev) => [...prev, newStudent]);
        }

        // reset everything
        setEditingStudent(null);
        setPrefix("");
        setCustomPrefix("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMobileNumber("");
        setIsModalOpen(false);
    };


    return (
        <div className="w-full h-full flex flex-col">
            <h1 className="text-2xl font-bold text-black my-5">REGISTRATION</h1>

            {/*Header (search, add) */}
            <div className="flex justify-between items-center">

                {/*Modal */}
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h2 className='text-lg font-bold mb-4'>Add New Student</h2>

                        <label className="block mb-2">Prefix</label>
                        <select
                            value={prefix}
                            onChange={(e) => setPrefix(e.target.value)}
                            className="border border-gray-300 rounded-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none h-10 px-3 mb-4 w-full cursor-pointer"
                            required
                        >
                            <option value="">Select Prefix</option>
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Other">Other</option>
                        </select>

                        {prefix === "Other" && (
                            <InputField
                                label="Custom Prefix"
                                placeholder="Dr."
                                type="text"
                                value={customPrefix}
                                onChange={(e) => setCustomPrefix(e.target.value)}
                                className="border border-gray-300 rounded-sm focus:ring-2 focus:ring focus:ring-emerald-500 focus:outline-none h-10 px-3 mb-4 placeholder-gray-400
                font-poppins placeholder:font-poppins" />
                        )}

                        <InputField
                            label="First Name"
                            placeholder="John"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="border border-gray-300 rounded-sm focus:ring-2 focus:ring focus:ring-emerald-500 focus:outline-none h-10 px-3 mb-4 placeholder-gray-400
                font-poppins placeholder:font-poppins"/>

                        <InputField
                            label="Last Name"
                            placeholder="Doe"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="border border-gray-300 rounded-sm focus:ring-2 focus:ring focus:ring-emerald-500 focus:outline-none h-10 px-3 mb-4 placeholder-gray-400
                font-poppins placeholder:font-poppins"/>

                        <InputField
                            label="Email Address"
                            placeholder="johndoe@gmail.com"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 rounded-sm focus:ring-2 focus:ring focus:ring-emerald-500 focus:outline-none h-10 px-3 mb-4 placeholder-gray-400
                font-poppins placeholder:font-poppins"/>

                        <InputField
                            label="Mobile Number"
                            placeholder="091234567"
                            type="number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="border border-gray-300 rounded-sm focus:ring-2 focus:ring focus:ring-emerald-500 focus:outline-none h-10 px-3 mb-4 placeholder-gray-400
                font-poppins placeholder:font-poppins"/>

                        <Button
                            type="submit"
                            className="text-white bg-emerald-500 px-5 py-2 w-full rounded-sm font-bold font-poppins tracking-normal cursor-pointer my-4"
                        >
                            {editingStudent ? "Update" : "Submit"}
                        </Button>
                    </form>
                </Modal>

                {/*Search Bar */}
                <div className="flex items-center gap-2 w-1/3 border-2 border-gray-300 rounded-md p-4 py-2">
                    <Search className="text-gray-400" />
                    <InputField
                        type="text"
                        placeholder="Search student..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full focus:outline-none "
                    />
                </div>

                {/*Add student button */}
                <Button className='bg-emerald-500 text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer active:opacity-50'
                    onClick={() => setIsModalOpen(true)}>
                    <Plus size={18} /> Add Student
                </Button>
            </div >

            {/*Table container Registration */}
            <div className=" overflow-auto mt-4">
                <StudentTable
                    students={filteredStudents}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
        </div >
    );
};

export default Registration;