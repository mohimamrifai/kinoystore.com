"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useState } from "react"

type User = {
  id: string
  name: string
  email: string
}

const users: User[] = [
  { id: "USR-0001", name: "Budi", email: "budi@example.com" },
  { id: "USR-0002", name: "Sinta", email: "sinta@example.com" },
]

export default function Page() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<User | null>(null)
  return (
    <section className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>User</CardTitle>
          <CardDescription>Manajemen pengguna</CardDescription>
        </CardHeader>
        <CardContent>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Detail User</DialogTitle>
                <DialogDescription>{selected?.id}</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-[120px_1fr] gap-3">
                <div className="text-sm text-muted-foreground">ID</div>
                <div className="font-medium">{selected?.id ?? "-"}</div>
                <div className="text-sm text-muted-foreground">Nama</div>
                <div>{selected?.name ?? "-"}</div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div>{selected?.email ?? "-"}</div>
              </div>
            </DialogContent>
          </Dialog>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((u) => (
                <TableRow key={u.id}>
                  <TableCell className="font-medium">{u.id}</TableCell>
                  <TableCell>{u.name}</TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelected(u)
                        setOpen(true)
                      }}
                    >
                      Detail
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}

