import React from "react"
import ReactDOM from "react-dom/client"

import "./globals.css"
import "./index.css"

import { Badge } from "./components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./components/ui/button"

const Column = () => {
  return (
    <div className="border-2 border-r-0 h-full first:rounded-l-md last:rounded-r-md last:border-r-2 box-border">

    </div>
  )
}


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
    
      <Dialog
        open={true}
      >
        <DialogContent className="flex flex-row gap-0 p-0 overflow-hidden h-[520px] min-w-[1000px]">
          <div className="flex flex-col gap-0 overflow-y-scroll no-scrollbar w-[150px] p-2 border-r ">
            {
              Array.from({ length: 52 }).map((_, index) => (
                <Button className="select-none" variant="ghost">Viikko {(index + 1).toString().padStart(2, "0")}</Button>
              ))
            }
          </div>

          <div className="flex flex-col p-5 w-full shadow-inner">
            <DialogHeader className="mb-4">
              <DialogTitle>Lukukausivaraus</DialogTitle>
              <DialogDescription>Tee viikoittain toistuvia varauksia ongelmitta.</DialogDescription>
            </DialogHeader>

            <div className="grow">
              {/* <h1>Viikko 36 / 2.9-6.9</h1> */}

              <div className="grid grid-cols-5 h-full">
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
              </div>
            </div>
          </div>

        </DialogContent>
      </Dialog>
    
    </>
  </React.StrictMode>
)
