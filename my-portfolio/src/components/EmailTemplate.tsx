import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Section,
	Text,
} from "@react-email/components";

type Props = {
	name: string;
	email: string;
	message: string;
};

export default function EmailTemplate({ name, email, message }: Props) {
	return (
		<Html>
			<Head />
			<Preview>New contact form submission from {name}</Preview>
			<Body style={main}>
				<Container style={container}>
					<Heading style={heading}>New Contact Submission</Heading>

					<Section style={section}>
						<Text style={label}>{"NAME"}</Text>
						<Text style={value}>{name}</Text>
					</Section>

					<Section style={section}>
						<Text style={label}>{"EMAIL"}</Text>
						<Text style={value}>{email}</Text>
					</Section>

					<Section style={section}>
						<Text style={label}>{"MESSAGE"}</Text>
						<Text style={value}>{message}</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
}

const main = {
	backgroundColor: "#f6f9fc",
	padding: "40px 0",
	fontFamily: "Arial, sans-serif",
};

const container = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	padding: "20px",
	borderRadius: "8px",
	maxWidth: "600px",
};

const heading = {
	fontSize: "20px",
	marginBottom: "20px",
};

const section = {
	marginBottom: "16px",
};

const label = {
	fontSize: "12px",
	fontWeight: "bold",
	color: "#666",
	marginBottom: "2px",
};

const value = {
	fontSize: "14px",
	color: "#000",
	whiteSpace: "pre-wrap" as const,
};