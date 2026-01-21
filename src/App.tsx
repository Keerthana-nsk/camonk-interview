export default function App() {
  return (
    <div className="h-screen flex">
      {/* Left Panel */}
      <div className="w-1/3 border-r p-4">
        <h2 className="font-bold text-lg">Blogs</h2>
        <p>Blog list will come here</p>
      </div>

      {/* Right Panel */}
      <div className="w-2/3 p-4">
        <h2 className="font-bold text-lg">Blog Details</h2>
        <p>Select a blog to view details</p>
      </div>
    </div>
  );
}
