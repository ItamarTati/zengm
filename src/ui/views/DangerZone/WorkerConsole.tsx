import { useState } from "react";
import { helpers, toWorker } from "../../util";

const WorkerConsole = ({ godMode }: { godMode: boolean }) => {
	const [code, setCode] = useState("");
	const [status, setStatus] = useState<
		| {
				type: "init" | "running" | "done";
		  }
		| {
				type: "error";
				error: Error;
		  }
	>({
		type: "init",
	});

	const disabled = status.type === "running" || !godMode;

	return (
		<>
			{!godMode ? (
				<p className="text-warning">
					This feature is only available in{" "}
					<a href={helpers.leagueUrl(["god_mode"])}>God Mode</a>.
				</p>
			) : null}

			<form
				onSubmit={async event => {
					event.preventDefault();

					setStatus({ type: "running" });
					try {
						await toWorker("main", "evalOnWorker", code);
					} catch (error) {
						console.error(error);
						setStatus({ type: "error", error });
						return;
					}
					setStatus({ type: "done" });
				}}
			>
				<textarea
					className="form-control text-monospace mb-2"
					disabled={disabled}
					rows={10}
					onChange={event => {
						setCode(event.target.value);
					}}
					value={code}
				/>

				<div className="d-flex align-items-center">
					<button className="btn btn-primary" disabled={disabled} type="submit">
						{status.type === "running" ? (
							<>
								<span
									className="spinner-border spinner-border-sm"
									role="status"
									aria-hidden="true"
								></span>{" "}
								Running...
							</>
						) : (
							"Run code"
						)}
					</button>
					{status.type === "error" ? (
						<div className="text-danger ml-3 font-weight-bold">Error!</div>
					) : null}
				</div>
				{status.type === "error" ? (
					<p className="text-danger mt-2">{status.error.message}</p>
				) : null}
			</form>
		</>
	);
};

export default WorkerConsole;
