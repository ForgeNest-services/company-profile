import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-2xl">
        {/* Large 404 Text */}
        <h1 className="text-8xl font-bold text-primary">404</h1>

        {/* Error Message */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            Page Not Found
          </h2>
          <p className="text-gray-600">
            Oops! The page you're looking for seems to have gone missing. Don't
            worry, it happens to the best of us.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/">
            <Button className="bg-secondary hover:bg-secondary/90 text-white flex items-center gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
