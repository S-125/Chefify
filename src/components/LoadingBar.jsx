function LoadingBar() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
        
            <div>
                <img
                    src="/loadinglogo.png" // Replace with your logo path
                    alt="Logo"
                    className="w-20"
                />
            </div>

            {/* Loading Text */}
            <p className="text-xl font-medium text-purple-700 animate-pulse">Loading...</p>
        </div>
    );
}

export default LoadingBar;
