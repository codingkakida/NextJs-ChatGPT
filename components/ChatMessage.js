export default function ChatMessage({ message, isUser }) {
    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-xs rounded-lg p-3 ${isUser ? 'text-gray-200' : ' text-gray-50'}`}>
          {message}
        </div>
      </div>
    );
  }
  