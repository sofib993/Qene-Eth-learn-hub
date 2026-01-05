import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, BookOpen, CheckCircle, XCircle, Eye } from "lucide-react";

const instructorsForVerification = [
  {
    id: "INST001",
    name: "Abebe Bikila",
    email: "abebe@example.com",
    dateSubmitted: "2023-10-26",
  },
  {
    id: "INST002",
    name: "Fatuma Roba",
    email: "fatuma@example.com",
    dateSubmitted: "2023-10-25",
  },
];

const coursesForApproval = [
  {
    id: "CRS001",
    title: "Modern React with Hooks",
    instructor: "Haile Gebrselassie",
    category: "Web Development",
    dateSubmitted: "2023-10-24",
  },
  {
    id: "CRS002",
    title: "Amharic for Beginners",
    instructor: "Kenenisa Bekele",
    category: "Language",
    dateSubmitted: "2023-10-23",
  },
  {
    id: "CRS003",
    title: "Ethiopian Cuisine 101",
    instructor: "Tirunesh Dibaba",
    category: "Cooking",
    dateSubmitted: "2023-10-22",
  },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">Admin Dashboard</h1>
          <p className="text-lg text-gray-500 mt-1">Platform oversight and management.</p>
        </header>

        {/* Payout Oversight Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Payout Oversight</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Payouts (Month)</CardTitle>
                <DollarSign className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">ETB 125,430.50</div>
                <p className="text-xs text-gray-500">+15.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Platform Commission (Month)</CardTitle>
                <DollarSign className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">ETB 31,357.62</div>
                <p className="text-xs text-gray-500">+18.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Payouts</CardTitle>
                <Users className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">ETB 18,900.00</div>
                <p className="text-xs text-gray-500">Scheduled for next cycle</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Instructor Verification Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-teal-600" />
                Instructor Verification Queue
              </CardTitle>
              <CardDescription>Review and approve new instructor applications.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Instructor</TableHead>
                    <TableHead className="hidden md:table-cell">Email</TableHead>
                    <TableHead className="hidden sm:table-cell">Submitted</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {instructorsForVerification.map((instructor) => (
                    <TableRow key={instructor.id}>
                      <TableCell className="font-medium">{instructor.name}</TableCell>
                      <TableCell className="hidden md:table-cell text-gray-600">{instructor.email}</TableCell>
                      <TableCell className="hidden sm:table-cell text-gray-600">{instructor.dateSubmitted}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700">
                          <CheckCircle className="h-4 w-4 mr-1" /> Approve
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700">
                          <XCircle className="h-4 w-4 mr-1" /> Reject
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Course Approval Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-teal-600" />
                Course Approval Queue
              </CardTitle>
              <CardDescription>Review and approve new course submissions.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Title</TableHead>
                    <TableHead className="hidden lg:table-cell">Instructor</TableHead>
                    <TableHead className="hidden md:table-cell">Category</TableHead>
                    <TableHead className="hidden sm:table-cell">Submitted</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {coursesForApproval.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-medium">{course.title}</TableCell>
                      <TableCell className="hidden lg:table-cell text-gray-600">{course.instructor}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge variant="secondary">{course.category}</Badge>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell text-gray-600">{course.dateSubmitted}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700">
                           <Eye className="h-4 w-4 mr-1" /> View
                        </Button>
                        <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700">
                          <CheckCircle className="h-4 w-4 mr-1" /> Approve
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700">
                          <XCircle className="h-4 w-4 mr-1" /> Reject
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
