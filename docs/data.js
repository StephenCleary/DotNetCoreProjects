var data = [

{
  "id": "AsyncEx.Testing",
  "description": "Helper types for writing unit tests for asynchronous code.",
  "commonlyUsedTypes": ["AsyncAssert"],
  "packages": [
  {
    "id": "Nito.AsyncEx.Testing",
    "types": [
    {
      "namespace": "Nito.AsyncEx.Testing",
      "name": "AsyncAssert",
      "description": "Async-compatible (single) assertion library for unit testing."
    }]
  }]
},

{
  "id": "Mvvm.Async",
  "description": "Asynchronous MVVM helpers.",
  "commonlyUsedTypes": ["IAsyncCommand", "NotifyTask"],
  "packages": [
  {
    "id": "Nito.Mvvm.Async",
    "types": [
    {
      "namespace": "Nito.Mvvm",
      "name": "IAsyncCommand",
      "description": "An asynchronous version of <code>ICommand</code>."
    },
    {
      "namespace": "Nito.Mvvm",
      "name": "AsyncCommandBase",
      "description": "A base type for asynchronous commands."
    },
    {
      "namespace": "Nito.Mvvm",
      "name": "AsyncCommand",
      "description": "A basic asynchronous delegate command."
    },
    {
      "namespace": "Nito.Mvvm",
      "name": "CancelCommand",
      "description": "A command that cancels a <code>CancellationToken</code> when it is executed."
    },
    {
      "namespace": "Nito.Mvvm",
      "name": "NotifyTask",
      "description": "Watches a task and raises property-changed notifications when the task completes."
    },
    {
      "namespace": "Nito.Mvvm",
      "name": "NotifyTask<T>",
      "description": "Watches a task and raises property-changed notifications when the task completes."
    }]
  }]
},

{
  "id": "Mvvm.Core",
  "description": "Basic MVVM helpers.",
  "commonlyUsedTypes": ["PropertyChangedEventArgsCache", "WeakCanExecuteChanged"],
  "packages": [
  {
    "id": "Nito.Mvvm.Core",
    "types": [
    {
      "namespace": "Nito.Mvvm",
      "name": "ExplicitCanExecute",
      "description": "An explicit implementation of <code>ICommand.CanExecuteChanged</code>."
    },
    {
      "namespace": "Nito.Mvvm",
      "name": "ICanExecute",
      "description": "An implementation of <code>ICommand.CanExecuteChanged</code> with <code>ICommand.CanExecute</code>."
    },
    {
      "namespace": "Nito.Mvvm",
      "name": "IRaisePropertyChanged",
      "description": "An object capable of raising <code>INotifyPropertyChanged.PropertyChanged</code>."
    },
    {
      "namespace": "Nito.Mvvm",
      "name": "PropertyChangedEventArgsCache",
      "description": "A cache for <code>PropertyChangedEventArgs</code> instances."
    },
    {
      "namespace": "Nito.Mvvm",
      "name": "PropertyChangedNotificationManager",
      "description": "Defers and consolidates <code>INotifyPropertyChanged.PropertyChanged</code> events."
    },
    {
      "namespace": "Nito.Mvvm",
      "name": "WeakCanExecuteChanged",
      "description": "An implementation of <code>ICommand.CanExecuteChanged</code> with weak events."
    }]
  }]
},

{
  "id": "Mvvm.CalculatedProperties",
  "description": "Auto-raise <code>NofityPropertyChanged</code>.",
  "commonlyUsedTypes": ["PropertyHelper", "CalculatedProperty<T>", "TriggerProperty<T>"],
  "packages": [
  {
    "id": "Nito.Mvvm.CalculatedProperties",
    "types": [
    {
      "namespace": "Nito.Mvvm.CalculatedProperties",
      "name": "CalculatedProperty<T>",
      "description": "A property whose value is determined by a delegate."
    },
    {
      "namespace": "Nito.Mvvm.CalculatedProperties",
      "name": "PropertyChangedNotificationManager",
      "description": "Manages deferring (and consolidating) <code>INotifyPropertyChanged.PropertyChanged</code> events."
    },
    {
      "namespace": "Nito.Mvvm.CalculatedProperties",
      "name": "PropertyHelper",
      "description": "Manages a collection of properties."
    },
    {
      "namespace": "Nito.Mvvm.CalculatedProperties",
      "name": "TriggerProperty<T>",
      "description": "A property that can trigger other properties to update when its value is set."
    }]
  }]
},

{
  "id": "Cancellation",
  "description": "Helper types for working with <code>CancellationToken</code>.",
  "commonlyUsedTypes": ["NormalizedCancellationToken"],
  "packages": [
  {
    "id": "Nito.Cancellation",
    "types": [
    {
      "namespace": "Nito",
      "name": "NormalizedCancellationToken",
      "description": "A cancellation token wrapper that may represent multiple linked cancellation tokens."
    }]
  }]
},

{
  "id": "Disposables",
  "description": "<code>IDisposable</code> implementations and helper types.",
  "commonlyUsedTypes": ["AnonymousDisposable", "SingleDisposable<T>"],
  "packages": [
  {
    "id": "Nito.Disposables",
    "types": [
    {
      "namespace": "Nito.Disposables",
      "name": "AnonymousDisposable",
      "description": "A disposable that executes a delegate when disposed."
    },
    {
      "namespace": "Nito.Disposables",
      "name": "SingleDisposable<T>",
      "description": "A base class for disposables that need exactly-once semantics in a threadsafe way."
    }]
  }]
},

{
  "id": "AsyncEx.Context",
  "description": "A single-threaded async-compatible context.",
  "commonlyUsedTypes": ["AsyncContext", "AsyncContextThread"],
  "packages": [
  {
    "id": "Nito.AsyncEx.Context",
    "types": [
    {
      "namespace": "Nito.AsyncEx",
      "name": "AsyncContext",
      "description": "Provides a context for asynchronous operations."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "AsyncContextThread",
      "description": "A thread that executes actions within an <code>AsyncContext</code>."
    }]
  }]
},

{
  "id": "AsyncEx.Oop",
  "description": "Interfaces and utility methods for combining async with OOP.",
  "commonlyUsedTypes": ["DeferralManager"],
  "packages": [
  {
    "id": "Nito.AsyncEx.Oop",
    "types": [
    {
      "namespace": "Nito.AsyncEx",
      "name": "DeferralManager",
      "description": "Manages the deferrals for an event that may have asynchonous handlers and needs to know when they complete."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "IDeferralSource",
      "description": "A source for deferrals. Event argument types may implement this interface to indicate they understand async event handlers."
    }]
  }]
},

{
  "id": "ArraySegments",
  "description": "Lightweight extension methods for <code>ArraySegment&lt;T&gt;</code>, particularly useful for byte arrays.",
  "commonlyUsedTypes": ["ArraySegmentExtensions"],
  "packages": [
  {
    "id": "Nito.ArraySegments",
    "types": [
    {
      "namespace": "Nito.ArraySegments",
      "name": "ArraySegmentExtensions",
      "description": "Extension methods for <code>ArraySegment&lt;T&gt;</code>. Includes <code>Take</code>, <code>Skip</code>, <code>Slice</code>, <code>TakeLast</code>, <code>SkipLast</code>, <code>AsArraySegment</code>, <code>CreateArraySegmentReader</code>, <code>CopyTo</code>, and <code>ToArray</code>."
    },
    {
      "namespace": "Nito.ArraySegments",
      "name": "ArraySegmentReader",
      "description": "Divides a single <code>ArraySegment&lt;T&gt;</code> into multiple <code>ArraySegment&lt;T&gt;</code> instances."
    }]
  },
  {
    "id": "Nito.ArraySegments.Streams",
    "types": [
    {
      "namespace": "Nito.ArraySegments",
      "name": "StreamExtensions",
      "description": "Stream-related extension methods for <code>ArraySegment&lt;T&gt;</code> and <code>ArraySegmentReader&lt;T&gt;</code>. Includes <code>CreateStream</code>, <code>CreateBinaryReader</code>, <code>CreateBinaryWriter</code>, and <code>Seek</code>."
    }]
  }]
},

{
  "id": "AsyncEx.Tasks",
  "description": "Basic task-based helpers for asynchronous code.",
  "commonlyUsedTypes": ["TaskConstants", "TaskExtensions", "TaskFactoryExtensions"],
  "packages": [
  {
    "id": "Nito.AsyncEx.Tasks",
    "types": [
    {
      "namespace": "Nito.AsyncEx",
      "name": "CancellationTokenTaskSource<T>",
      "description": "A <code>Task</code> wrapper for <code>CancellationToken</code> values."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "TaskExtensions",
      "description": "Extension methods for <code>Task</code> and <code>Task&lt;T&gt;</code>. Includes <code>WaitAsync</code>, <code>WhenAny</code>, and <code>WhenAll</code>."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "TaskCompletionSourceExtensions",
      "description": "Extension methods for <code>TaskCompletionSource&lt;T&gt;</code>. Includes <code>TryCompleteFromCompletedTask</code> and <code>CreateAsyncTaskSource</code>."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "TaskConstants",
      "description": "Global completed task instances."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "TaskConstants<T>",
      "description": "Global completed task instances."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "TaskFactoryExtensions",
      "description": "The <code>Run</code> extension method for <code>TaskFactory</code> instances."
    },
    {
      "namespace": "Nito.AsyncEx.Synchronous",
      "name": "TaskExtensions",
      "description": "Synchronous extension methods for <code>Task</code> and <code>Task&lt;T&gt;</code>. Includes <code>WaitAndUnwrapException</code> and <code>WaitWithoutException</code>."
    }]
  }]
},

{
  "id": "AsyncEx.Coordination",
  "description": "Async-compatible coordination primitives.",
  "commonlyUsedTypes": ["AsyncLock", "AsyncLazy<T>", "PauseToken", "AsyncManualResetEvent"],
  "packages": [
  {
    "id": "Nito.AsyncEx.Coordination",
    "types": [
    {
      "namespace": "Nito.AsyncEx",
      "name": "AsyncLazy<T>",
      "description": "Provides support for asynchronous lazy initialization."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "AsyncLazyFlags",
      "description": "Flags controlling the behavior of <code>AsyncLazy&lt;T&gt;</code>."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "AsyncAutoResetEvent",
      "description": "An async-compatible auto-reset event."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "AsyncConditionVariable",
      "description": "An async-compatible condition variable."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "AsyncLock",
      "description": "An async-compatible mutual exclusion lock."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "AsyncManualResetEvent",
      "description": "An async-compatible manual-reset event."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "AsyncMonitor",
      "description": "An async-compatible monitor."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "AsyncSemaphore",
      "description": "An async-compatible semaphore. This is a more <code>using</code>-friendly alternative to <code>SemaphoreSlim</code>."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "IAsyncWaitQueue<T>",
      "description": "A cancel-safe collection <code>TaskCompletionSource&lt;T&gt;</code> instances."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "AsyncWaitQueueExtensions",
      "description": "Extension methods for <code>IAsyncWaitQueue&lt;T&gt;</code> instances."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "DefaultAsyncWaitQueue<T>",
      "description": "The default <code>IAsyncWaitQueue&lt;T&gt;</code> implementation, which uses a double-ended queue."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "AwaitableDisposable<T>",
      "description": "An awaitable wrapper around a task whose result is disposable."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "PauseTokenSource",
      "description": "The source (controller) of a <code>PauseToken</code>, which can be used to cooperatively pause and unpause operations."
    },
    {
      "namespace": "Nito.AsyncEx",
      "name": "PauseToken",
      "description": "A type that allows an operation to be cooperatively paused."
    }]
  }]
},

{
  "id": "ConnectedProperties",
  "description": "Dynamically attach properties to (almost) any object instance.",
  "commonlyUsedTypes": ["ConnectedProperty"],
  "packages": [
  {
    "id": "Nito.ConnectedProperties",
    "types": [
    {
      "namespace": "Nito.ConnectedProperties",
      "name": "ConnectedProperty",
      "description": "A property that may be dynamically connected to a carrier object at runtime."
    },
    {
      "namespace": "Nito.ConnectedProperties",
      "name": "ConnectedPropertyScope",
      "description": "A collection of properties that can be connected to carrier objects."
    }]
  }]
},

{
  "id": "Comparers",
  "description": "The last comparison library you'll ever need!",
  "commonlyUsedTypes": ["ComparerBuilder", "ComparableBase<T>", "EqualityComparerBuilder", "EquatableBase<T>"],
  "packages": [
  {
    "id": "Nito.Comparers.Core",
    "types": [
    {
      "namespace": "Nito.Comparers",
      "name": "IFullComparer",
      "description": "A non-generic comparer that also provides equality comparison (and hash codes)."
    },
    {
      "namespace": "Nito.Comparers",
      "name": "IFullComparer<T>",
      "description": "A comparer that also provides equality comparison (and hash codes) for both generic and non-generic usage."
    },
    {
      "namespace": "Nito.Comparers",
      "name": "ComparerBuilder",
      "description": "Entry point for a fluent API for creating comparers."
    },
    {
      "namespace": "Nito.Comparers",
      "name": "ComparerBuilder<T>",
      "description": "Strongly-typed part of a fluent API for creating comparers."
    },
    {
      "namespace": "Nito.Comparers",
      "name": "ComparerExtensions",
      "description": "Extension methods for <code>IComparer&lt;T&gt;</code>. Includes <code>ThenBy</code>, <code>Reverse</code>, and <code>Sequence</code>."
    },
    {
      "namespace": "Nito.Comparers",
      "name": "ComparableBase<T>",
      "description": "A base class that provides implementations for comparison, equality, and hash code methods."
    },
    {
      "namespace": "Nito.Comparers",
      "name": "ComparableBaseWithOperators<T>",
      "description": "A base class that provides implementations for comparison, equality, and hash code methods, along with overloaded operators."
    },
    {
      "namespace": "Nito.Comparers.Util",
      "name": "ComparableImplementations",
      "description": "Provides implementations for comparison, equality, and hash code methods."
    },
    {
      "namespace": "Nito.Comparers",
      "name": "IFullEqualityComparer<T>",
      "description": "An equality comparer that supports both generic and non-generic equality comparison."
    },
    {
      "namespace": "Nito.Comparers",
      "name": "EqualityComparerBuilder",
      "description": "Entry point for a fluent API for creating equality comparers."
    },
    {
      "namespace": "Nito.Comparers",
      "name": "EqualityComparerBuilder<T>",
      "description": "Strongly-typed part of a fluent API for creating equality comparers."
    },
    {
      "namespace": "Nito.Comparers",
      "name": "EqualityComparerExtensions",
      "description": "Extension methods for <code>IEqualityComparer&lt;T&gt;</code>. Includes <code>ThenEquateBy</code> and <code>EquateSequence</code>."
    },
    {
      "namespace": "Nito.Comparers",
      "name": "EquatableBase<T>",
      "description": "A base class that provides implementations for equality and hash code methods.",
    },
    {
      "namespace": "Nito.Comparers",
      "name": "EquatableBaseWithOperators<T>",
      "description": "A base class that provides implementations for equality and hash code methods, along with overloaded operators."
    }]
  },
  {
    "id": "Nito.Comparers.Linq",
    "types": [
    {
      "namespace": "Nito.Comparers.Linq",
      "name": "EnumerableExtensions",
      "description": "Extension methods for <code>IEnumerable&lt;T&gt;</code>. Includes <code>OrderBy</code>, <code>OrderByDescending</code>, <code>ThenBy</code>, <code>ThenByDescending</code>, <code>Contains</code>, <code>Distinct</code>, <code>Except</code>, <code>GroupBy</code>, <code>GroupJoin</code>, <code>Intersect</code>, <code>Join</code>, <code>SequenceEqual</code>, <code>ToDictionary</code>, <code>ToLookup</code>, and <code>Union</code>."
    }]
  },
  {
    "id": "Nito.Comparers.Rx",
    "types": [
    {
      "namespace": "Nito.Comparers.Linq",
      "name": "ObservableExtensions",
      "description": "Extension methods for <code>IObservable&lt;T&gt;</code>. Includes <code>Max</code>, <code>MaxBy</code>, <code>Min</code>, <code>MinBy</code>, <code>Contains</code>, <code>Distinct</code>, <code>DistinctUntilChanged</code>, <code>GroupBy</code>, <code>GroupByUntil</code>, <code>SequenceEqual</code>, <code>ToDictionary</code>, and <code>ToLookup</code>."
    }]
  },
  {
    "id": "Nito.Comparers.Ix",
    "types": [
    {
      "namespace": "Nito.Comparers.Linq",
      "name": "IxEnumerableExtensions",
      "description": "Extension methods for <code>IEnumerable&lt;T&gt;</code>. Includes <code>Max</code>, <code>MaxBy</code>, <code>Min</code>, <code>MinBy</code>, <code>Distinct</code>, and <code>DistinctUntilChanged</code>."
    }]
  }]
},

{
  "id": "Deque",
  "description": "A double-ended queue.",
  "commonlyUsedTypes": ["Deque<T>"],
  "packages": [
  {
    "id": "Nito.Collections.Deque",
    "types": [
    {
      "namespace": "Nito.Collections",
      "name": "Deque<T>",
      "description": "A double-ended queue, which provides O(1) indexed access, O(1) removals from the front and back, amortized O(1) insertions to the front and back, and O(N) insertions and removals anywhere else."
    }]
  }]
}];
